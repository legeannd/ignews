import { useRouter } from "next/router";
import Link, { LinkProps } from "next/link";
import { ReactElement, cloneElement } from "react";

interface ActiveLinkProps extends LinkProps {
  children: ReactElement;
  activeClassName: string;
}

export function ActiveLink({ children, activeClassName, ...rest }: ActiveLinkProps) {
  const { asPath } = useRouter()

  const className = asPath === rest.href 
    ? activeClassName
    : '';

  return (
    <Link {...rest}>
      {cloneElement(children, { 
        className
      })}
    </Link>
  )
}

// A função cloneElement possibilita adicionar propriedades a elementos que vem dentro das children,
// o que não é possível por padrão, visto que não é possível conhecer qual é o tipo de elemento que veio junto.
// Nesse caso, a âncora que vem como children do ActiveLink recebe a propriedade className em todos os casos.