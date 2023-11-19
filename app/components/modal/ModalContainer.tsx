interface ModalProps {
  children: React.ReactNode;
}

function Modal(props: ModalProps) {
  return (
    <>
      <section
        className="object-center w-full max-w-[40rem] overflow-hidden bg-cover mx-auto rounded-lg animate-scaleIn shadow-2xl"
        id="modal-container"
      >
        <div className="items-center justify-center">
          <div className="w-full mx-auto py-3 overflow-hidden transition-all transform bg-white h-full border-[1.5px] border-cs-border-fade rounded-lg">
            {props.children}
          </div>
        </div>
      </section>
    </>
  );
}

export default Modal;
