import ArrowFunctions from "./arrow-functions";
import BooleanVariables from "./boolean-variables";
import Destructing from "./destructing";
import ES5Functions from "./es5-fucntions";
import FindFunction from "./find-function";
import FunctionDestructing from "./function-destructing";
import House from "./house";
import IfElse from "./if-else";
import Spread from "./spread";
import TemplateLiterals from "./template-literals";
import TernaryOperator from "./ternary-operator";
import VariablesAndConstants from "./variable-and-constants";
import VariableTypes from "./variable-types";
import WorkingWithArrays from "./working-with-arrays";
import WorkingWithFunctions from "./working-with-function";

function JavaScript() {
    console.log("Hello World!")
    return(
       <div>
          <h1>JavaScript</h1>
          <VariablesAndConstants/>
          <VariableTypes/>
          <BooleanVariables/>
          <IfElse/>
          <TernaryOperator/>
          <WorkingWithFunctions/>
          <WorkingWithArrays/>
          <TemplateLiterals/>
          <House/>
          <Spread/>
          <Destructing/>
          <FunctionDestructing/>
       </div>
    );
 }
 export default JavaScript
 
 