document.addEventListener("DOMContentLoaded", function () {

    const form = document.getElementById("formulaire");
    form.addEventListener("submit", function (e) {
        e.preventDefault();
        
    })

        const date_input = document.getElementById("date");
        date_input.addEventListener('input', () => {
            const date_value = date_input.value;

            function isValidDate(date_value) {
                const date = new Date(date_value);
                const today = new Date();
                today.setHours(00, 00, 00);

                const span_date = document.getElementById("aff_date");
                span_date.innerHTML = "";

                const regEx = /^\d{4}-\d{2}-\d{2}$/;
                if (date_value.match(regEx) && date.getTime() <= today.getTime()) {
                    span_date.innerHTML = date_value.split('-').reverse().join('/');
                }
            }
            isValidDate(date_value);
        })


        const type_input = document.getElementById("type");
        const type_value = type_input.value;

        function isValidType(type_value) {
            const span_type = document.getElementById("aff_type");
            if (type_value == "Voiture") {
                span_type.innerHTML = type_value;
            }
        }
        isValidType(type_value);


        const marque_input = document.getElementById("marque");
        marque_input.addEventListener('change', () => {
            const marque_value = marque_input.value;

            function isValidMarque(marque_value) {
                const span_marque = document.getElementById("aff_marque");
                if (marque_value == "Peugeot" || marque_value == "Renault" || marque_value == "Citroën") {
                    span_marque.innerHTML = marque_value;
                }
            }
            isValidMarque(marque_value);
        })


        const couleur_input = document.getElementById("couleur");
        couleur_input.addEventListener('change', () => {
            const couleur_value = couleur_input.value;

            function isValidColor(couleur_value) {
                const span_couleur = document.getElementById("aff_couleur");
                const regEx = /^#([a-fA-F0-9]{6}|[a-fA-F0-9]{3})$/;
                if (couleur_value.match(regEx)) {
                    span_couleur.innerHTML = couleur_value;
                }
            }
            isValidColor(couleur_value);
        })


        const options = document.getElementsByName("option");
        for (const option of options) {
            option.addEventListener('change', () => {

                function isValidOption(option) {
                    const span_options = document.getElementById("aff_option");
                    if (option.checked) {
                        span_options.innerHTML = option.value;
                    }
                }
                isValidOption(option);
            })
        }

})