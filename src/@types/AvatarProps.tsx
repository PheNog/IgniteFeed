import { ImgHTMLAttributes } from "react";

export interface AvatarProps extends ImgHTMLAttributes<HTMLImageElement>{// Para por exemplo adicionar propriedades de uma imagem, extendemos a interface com a de uma imagem puxando essa outra interface ja feita e passando após o elemento dentro de '<elemento>'
    hasBorder?: boolean;
    url: string;
}