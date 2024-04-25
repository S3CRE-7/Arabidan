// verbUtils.js

export function getZamirAndVerb(
  person: string,
  quantity: string,
  verbth: string,
  verbse: string,
  verbfi: string
) {
  const kasre = "َ";
  const fathe = "ِ";
  const o = "ُ";
  const verb = verbth + kasre + verbse + kasre + verbfi + kasre;
  let zamir;
  let motasel;
  let Verb;

  if (
    person.toLowerCase() === "first" &&
    quantity.toLowerCase() === "singular"
  ) {
    zamir = "انا";
    motasel = "ت" + o;
    Verb = verb + motasel;
  }
  if (
    person.toLowerCase() === "second" &&
    quantity.toLowerCase() === "singular"
  ) {
    zamir = "انتَ";
    motasel = "ت" + kasre;
    Verb = verb + motasel;
  }
  if (
    person.toLowerCase() === "third" &&
    quantity.toLowerCase() === "singular"
  ) {
    zamir = "هُوَ";
    motasel = o;
    Verb = verb;
  }

  return { zamir, Verb };
}
