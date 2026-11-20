import { useFormik } from "formik";
import * as Yup from "yup";

import { useFinalizarPedidoMutation } from "../../services/checkout";
import { selectTotal, useAppDispatch, useAppSelector } from "../../store";
import { fechar, irPara } from "../../store/reducers/carrinho";
import { formataPreco } from "../../utils";
import { mascaraCartao, mascaraCep, somenteNumeros } from "./mascaras";
import * as S from "./styles";

const obrigatorio = "Campo obrigatório";

const schema = Yup.object({
  receiver: Yup.string()
    .min(3, "Informe o nome completo")
    .required(obrigatorio),
  description: Yup.string().min(5, "Informe o endereço").required(obrigatorio),
  city: Yup.string().min(2, "Informe a cidade").required(obrigatorio),
  zipCode: Yup.string()
    .matches(/^\d{5}-\d{3}$/, "CEP inválido")
    .required(obrigatorio),
  number: Yup.string().required(obrigatorio),
  complement: Yup.string(),
  cardName: Yup.string()
    .min(3, "Informe o nome do cartão")
    .required(obrigatorio),
  cardNumber: Yup.string()
    .matches(/^(\d{4} ){3}\d{4}$/, "Número inválido")
    .required(obrigatorio),
  cardCode: Yup.string()
    .matches(/^\d{3}$/, "CVV inválido")
    .required(obrigatorio),
  expiresMonth: Yup.number()
    .typeError("Mês inválido")
    .min(1, "Mês inválido")
    .max(12, "Mês inválido")
    .required(obrigatorio),
  expiresYear: Yup.number()
    .typeError("Ano inválido")
    .min(new Date().getFullYear(), "Cartão vencido")
    .required(obrigatorio),
});

const camposEntrega = [
  "receiver",
  "description",
  "city",
  "zipCode",
  "number",
] as const;

const Checkout = () => {
  const dispatch = useAppDispatch();
  const { itens, etapa } = useAppSelector((state) => state.carrinho);
  const total = useAppSelector(selectTotal);
  const [finalizarPedido, { data, isLoading, isError, reset }] =
    useFinalizarPedidoMutation();

  const form = useFormik({
    initialValues: {
      receiver: "",
      description: "",
      city: "",
      zipCode: "",
      number: "",
      complement: "",
      cardName: "",
      cardNumber: "",
      cardCode: "",
      expiresMonth: "",
      expiresYear: "",
    },
    validationSchema: schema,
    onSubmit: async (valores) => {
      const resposta = await finalizarPedido({
        products: itens.map((item) => ({ id: item.id, price: item.preco })),
        delivery: {
          receiver: valores.receiver,
          address: {
            description: valores.description,
            city: valores.city,
            zipCode: valores.zipCode,
            number: Number(valores.number),
            complement: valores.complement,
          },
        },
        payment: {
          card: {
            name: valores.cardName,
            number: valores.cardNumber.replace(/\s/g, ""),
            code: Number(valores.cardCode),
            expires: {
              month: Number(valores.expiresMonth),
              year: Number(valores.expiresYear),
            },
          },
        },
      });
      if ("data" in resposta) dispatch(irPara("confirmacao"));
    },
  });

  const erro = (campo: keyof typeof form.values) =>
    form.touched[campo] && form.errors[campo] ? form.errors[campo] : "";

  const campo = (
    nome: keyof typeof form.values,
    rotulo: string,
    mascara?: (valor: string) => string,
  ) => (
    <S.Campo>
      <label htmlFor={nome}>{rotulo}</label>
      <input
        id={nome}
        name={nome}
        value={form.values[nome]}
        onBlur={form.handleBlur}
        onChange={(e) =>
          form.setFieldValue(
            nome,
            mascara ? mascara(e.target.value) : e.target.value,
          )
        }
        className={erro(nome) ? "erro" : ""}
        inputMode={mascara ? "numeric" : undefined}
      />
      {erro(nome) && <small>{erro(nome)}</small>}
    </S.Campo>
  );

  // valida só os campos de entrega antes de seguir para o pagamento
  const continuarParaPagamento = async () => {
    const erros = await form.validateForm();
    camposEntrega.forEach((nome) => form.setFieldTouched(nome, true, false));
    if (camposEntrega.every((nome) => !erros[nome])) {
      dispatch(irPara("pagamento"));
    }
  };

  const concluir = () => {
    form.resetForm();
    reset();
    dispatch(fechar());
  };

  if (etapa === "confirmacao" && data) {
    return (
      <>
        <S.Titulo>Pedido realizado - {data.orderId}</S.Titulo>
        <S.Texto>
          Estamos felizes em informar que seu pedido já está em processo de
          preparação e, em breve, será entregue no endereço fornecido.
        </S.Texto>
        <S.Texto>
          Gostaríamos de ressaltar que nossos entregadores não estão autorizados
          a realizar cobranças extras.
        </S.Texto>
        <S.Texto>
          Lembre-se da importância de higienizar as mãos após o recebimento do
          pedido, garantindo assim sua segurança e bem-estar durante a refeição.
        </S.Texto>
        <S.Texto>
          Esperamos que desfrute de uma deliciosa e agradável experiência
          gastronômica. Bom apetite!
        </S.Texto>
        <S.Botao type="button" onClick={concluir}>
          Concluir
        </S.Botao>
      </>
    );
  }

  return (
    <form onSubmit={form.handleSubmit} noValidate>
      {etapa === "entrega" && (
        <>
          <S.Titulo>Entrega</S.Titulo>
          {campo("receiver", "Quem irá receber")}
          {campo("description", "Endereço")}
          {campo("city", "Cidade")}
          <S.Linha $colunas="1fr 1fr">
            {campo("zipCode", "CEP", mascaraCep)}
            {campo("number", "Número", (v) => somenteNumeros(v, 6))}
          </S.Linha>
          {campo("complement", "Complemento (opcional)")}
          <S.Botoes>
            <S.Botao type="button" onClick={continuarParaPagamento}>
              Continuar com o pagamento
            </S.Botao>
            <S.Botao type="button" onClick={() => dispatch(irPara("carrinho"))}>
              Voltar para o carrinho
            </S.Botao>
          </S.Botoes>
        </>
      )}

      {etapa === "pagamento" && (
        <>
          <S.Titulo>Pagamento - Valor a pagar {formataPreco(total)}</S.Titulo>
          {campo("cardName", "Nome no cartão")}
          <S.Linha $colunas="1fr 87px">
            {campo("cardNumber", "Número do cartão", mascaraCartao)}
            {campo("cardCode", "CVV", (v) => somenteNumeros(v, 3))}
          </S.Linha>
          <S.Linha $colunas="1fr 1fr">
            {campo("expiresMonth", "Mês de vencimento", (v) =>
              somenteNumeros(v, 2),
            )}
            {campo("expiresYear", "Ano de vencimento", (v) =>
              somenteNumeros(v, 4),
            )}
          </S.Linha>
          <S.Botoes>
            <S.Botao type="submit" disabled={isLoading}>
              {isLoading ? "Finalizando pagamento..." : "Finalizar pagamento"}
            </S.Botao>
            <S.Botao type="button" onClick={() => dispatch(irPara("entrega"))}>
              Voltar para a edição de endereço
            </S.Botao>
          </S.Botoes>
          {isError && (
            <S.Erro>
              Não foi possível finalizar o pedido. Confira os dados e tente
              novamente.
            </S.Erro>
          )}
        </>
      )}
    </form>
  );
};

export default Checkout;
