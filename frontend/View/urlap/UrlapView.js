import UrlapTextElem from "./UrlapTextElem.js";
import UrlapNumberElem from "./UrlapNumberElem.js";
import UrlapDateElem from "./UrlapDateElem.js";
class UrlapView {
    #adatLeiras = {};
    #inputElemek = [];
    #valid;
    #urlapAdat = {};
    constructor(adatLeiras, szuloElem) {
        this.#adatLeiras = adatLeiras;
        this.#inputElemek = [];
        this.#valid = true;
        this.szuloElem = szuloElem;
     
        szuloElem.append("<form class=''>");
        this.formElem = this.szuloElem.children("form");
        this.htmlOsszallit();
        this.submitElem = $("#submit");
        this.submitElem.on("click", (event) => {
            event.preventDefault();
            this.#valid = true;
            this.#inputElemek.forEach((element) => {
                this.#valid = this.#valid && element.valid;
            });
            console.log(this.#valid);
            if (this.#valid) {
                this.#adatGyujt();
            }
        });
    }
    #adatGyujt() {
        this.#inputElemek.forEach((element) => {
            this.#urlapAdat[element.kulcs] = element.value;
        });
        console.log(this.#urlapAdat);
    }
    htmlOsszallit() {
        for (const key in this.#adatLeiras) {
            switch (this.#adatLeiras[key].tipus) {
                case "text":
                    this.#inputElemek.push(
                        new UrlapTextElem(
                            this.#adatLeiras[key],
                            key,
                            this.formElem
                        )
                    );
                    break;
                case "number":
                    this.#inputElemek.push(
                        new UrlapNumberElem(
                            this.#adatLeiras[key],
                            key,
                            this.formElem
                        )
                    );
                    break;
                    case "date":
                        this.#inputElemek.push(
                            new UrlapDateElem(
                                this.#adatLeiras[key],
                                key,
                                this.formElem
                            )
                        );
                        break;
                default:
                // code block
            }
        }
        this.formElem.append("<input type='submit' id='submit' value='OK'>");
    }

    /*   urlapNumberElem(leiras, kulcs) {
        let txt = `<div id="${kulcs}blokk" class="mb-3 mt-3">
                    <label for="${kulcs}" class="form-label">${leiras.megjelenes}</label>
                    <input type="${leiras.tipus}" id="${kulcs}" min="${leiras.pattern.min}" max="${leiras.pattern.max}" value="${leiras.pattern.max}" name="${kulcs}" class="form-control" pattern="${leiras.pattern}">
                    <div class="valid-feedback">fsd</div>
                    <div class="invalid-feedback">fsd</div>
                </div>`;
        this.formElem.append(txt);
    } */
}
export default UrlapView;
