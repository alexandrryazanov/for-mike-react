import React from "react";
import { ModalProps } from "./types";
import styles from "./styles.module.scss";
import { createPortal } from "react-dom";
import useTheme from "../../hooks/useTheme";
import Button from "../Button";

const Modal: React.FC<ModalProps> = ({
  children,
  okButtonText,
  cancelButtonText,
  actionsVisible,
  onClose,
  open,
  title,
  onOkClick,
  disablePortal,
}) => {
  const { theme } = useTheme();
  if (!open) return null;

  const closeHandler = () => {
    if (!onClose) return;
    onClose();
  };

  const render = () => (
    <>
      <div className={styles.backdrop} onClick={closeHandler}></div>

      <div
        className={styles.modal}
        style={{ border: `3px solid ${theme?.colors.primary || "grey"}` }}
      >
        <div className={styles.title}>
          <h2>{title}</h2>
          <Button onClick={closeHandler}>X</Button>
        </div>
        <div>{children}</div>
        {actionsVisible && (
          <div className={styles.actionsBlock}>
            <Button onClick={closeHandler}>
              {cancelButtonText || "Cancel"}
            </Button>
            <Button onClick={onOkClick}>{okButtonText || "OK"}</Button>
          </div>
        )}
      </div>
    </>
  );

  if (disablePortal) return render();

  const root = document.getElementById("root");
  if (!root) return null;

  return createPortal(render(), root);
};

export default Modal;
