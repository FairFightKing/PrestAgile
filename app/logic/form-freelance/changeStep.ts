import Step from "./Step";

export const changeStep = (value, array) => {
    return new Step(array.Etapes[value].id, array.Etapes[value].title, array.Etapes[value].input)
}


