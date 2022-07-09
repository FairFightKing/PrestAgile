import { Step } from '../interfaces/Step'
import { Input } from '../interfaces/Input'
import {ButtonHomePage} from "../../../ui/components/buttonHomePage/buttonHomePage";
import React from "react";

export interface StepGeneratorInterface {
  changeStep(array: Array<Step>, index?: number): Step | boolean
  callComponentsBasedOnStepInput(): JSX.Element
}

export class StepGeneratorImplementation implements StepGeneratorInterface {
  changeStep(array: Array<Step>, index?: number): Step {
    if (index === undefined) return array[0]
    if (array[index] === undefined) throw new Error('The step does not exist')
    return array[index]
  }

  callComponentsBasedOnStepInput(): JSX.Element {
    return React.createElement(ButtonHomePage)
  }

}
