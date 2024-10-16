   $(document).ready(function () {
            var envelope = $('#envelope');
            var btn_open = $("#open");
            var btn_reset = $("#reset");
            var modal = $("#letterModal");
            var closeModal = $(".modal-close");

            // Abrir sobre
            btn_open.click(function () {
                openEnvelope();
            });

            // Restablecer sobre
            btn_reset.click(function () {
                closeEnvelope();
            });

            // Mostrar modal al hacer clic en la carta
            envelope.click(function () {
                openModal();
            });

            // Cerrar modal
            closeModal.click(function () {
                closeModalWindow();
            });

            // Abrir sobre
            function openEnvelope() {
                envelope.addClass("open").removeClass("close");
            }

            // Cerrar sobre
            function closeEnvelope() {
                envelope.addClass("close").removeClass("open");
            }

            // Abrir modal
            function openModal() {
                modal.show();
            }

            // Cerrar modal
            function closeModalWindow() {
                modal.hide();
            }

            // Cerrar modal si se hace clic fuera del contenido
            $(window).click(function (event) {
                if (event.target.id == "letterModal") {
                    closeModalWindow();
                }
            });
        });