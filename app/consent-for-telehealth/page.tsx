import { permanentRedirect } from "next/navigation";

export default function ConsentForTelehealthRedirect() {
  permanentRedirect("/telehealth-consent/");
}
