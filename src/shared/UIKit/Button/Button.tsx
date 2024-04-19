import { ReactNode, memo } from "react";
import { classNames } from "../../helpers/classNames";
import styles from "./Button.module.scss";

enum Colors {
  PRIMARY = "primary",
  SECONDARY = "secondary",
}

enum Variants {
  CONTAINED = "contained",
  OUTLINED = "outlined",
}

type TButtonProps = {
  children: ReactNode;
  color?: Colors;
  variant?: Variants;
};

export const Button = memo(
  ({
    children,
    color = Colors.PRIMARY,
    variant = Variants.CONTAINED,
  }: TButtonProps) => (
    <button
      className={classNames(styles.button, styles[color], styles[variant])}
    >
      {children}
    </button>
  )
);
