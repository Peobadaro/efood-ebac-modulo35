import { useEffect, useState } from "react";

type Estado<T> = {
  dados?: T;
  carregando: boolean;
  erro?: string;
};

// Busca dados por AJAX (fetch) e controla carregando/erro
export const useFetch = <T>(buscar: () => Promise<T>, chave: string) => {
  const [estado, setEstado] = useState<Estado<T>>({ carregando: true });

  useEffect(() => {
    let ativo = true;
    setEstado({ carregando: true });
    buscar()
      .then((dados) => ativo && setEstado({ dados, carregando: false }))
      .catch(
        (e: Error) =>
          ativo && setEstado({ carregando: false, erro: e.message }),
      );
    return () => {
      ativo = false;
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chave]);

  return estado;
};
