// --Imports--
import * as Elements from "./Elements.js";
import submitHandler from "./SubmitHandler.js";
import ClickHandler from "./ClickHandler.js";

// --Listeners--
Elements.searchFormEl.addEventListener("submit", submitHandler);
Elements.jobListSearchEl.addEventListener("click", ClickHandler);
