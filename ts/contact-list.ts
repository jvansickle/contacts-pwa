namespace ContactsPWA {
    export class Main {

        private cardContainer: any;
        private template: any;

        constructor() {
            this.cardContainer = document.querySelector(".contact-card-container");
            this.template = document.querySelector(".contact-template");

            if (this.template === null || this.cardContainer === null) {
                alert("Template not found!!! All is lost!");
            }

            this.loadContacts();
        }

        private loadContacts() {
            for (let i = 0; i < 10; i++) {
                let clone = this.template.cloneNode(true);
                clone.style["display"] = "";
                clone.querySelector(".contact-name").textContent = `Contact ${i}`;
                this.cardContainer.appendChild(clone);
            }
        }
    }
}

let m = new ContactsPWA.Main();
