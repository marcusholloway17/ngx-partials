import { Injectable } from "@angular/core";
import { BehaviorSubject } from "rxjs";
import { TimelineStep } from "./type";
import { ClrTimelineStepState } from "@clr/angular";

@Injectable()
export class TimelineService {
  private _timeline$ = new BehaviorSubject<TimelineStep[]>([]);
  public timeline$ = this._timeline$.asObservable();

  constructor() {}

  getCurrentState() {
    return this._timeline$.getValue();
  }

  init(steps: TimelineStep[]) {
    this._timeline$.next(steps);
  }

  getCurrentStep() {
    return this.getCurrentState().find(
      (step) =>
        step?.state == ClrTimelineStepState.CURRENT ||
        step?.state == ClrTimelineStepState.PROCESSING ||
        step?.state == ClrTimelineStepState.ERROR
    );
  }

  getNextStep() {
    const currentState = this.getCurrentState();
    return currentState.find((step) => {
      let currentStep = this.getCurrentStep();
      if (
        currentStep &&
        currentState.indexOf(currentStep) + 1 <= currentState.length &&
        currentState.indexOf(currentStep) + 1 == currentState.indexOf(step)
      ) {
        return step;
      } else {
        return undefined;
      }
    });
  }

  getPreviousStep() {
    const currentState = this.getCurrentState();
    const currentStep = this.getCurrentStep();

    return currentState.find((step) => {
      if (
        currentStep &&
        currentState.indexOf(currentStep) - 1 >= 0 &&
        currentState.indexOf(currentStep) == currentState.indexOf(step)
      ) {
        return step;
      }
      return undefined;
    });
  }

  next() {
    const currentStep = this.getCurrentStep();
    const nextStep = this.getNextStep();

    this.init(
      this.getCurrentState().map((step) => {
        if (step == currentStep) {
          step.state = ClrTimelineStepState.SUCCESS;
        }
        if (step == nextStep) {
          step.state = ClrTimelineStepState.CURRENT;
        }
        return step;
      })
    );
    return nextStep;
  }

  previous() {
    const currentState = this.getCurrentState();
    const currentStep = this.getCurrentStep();
    const previous = currentState?.find((step) => {
      if (currentStep) {
        if (
          currentState.indexOf(currentStep) - 1 ==
          currentState.indexOf(step)
        ) {
          return step;
        }
      }
      return undefined;
    });

    console.log("prev", previous, "curr", currentStep);

    this.init(
      this.getCurrentState().map((step) => {
        if (step == currentStep) {
          step.state = ClrTimelineStepState.NOT_STARTED;
        } else if (step == previous) {
          step.state = ClrTimelineStepState.CURRENT;
        }

        return step;
      })
    );
    return previous;
  }

  processing(step?: TimelineStep) {
    const currentState = this.getCurrentState();
    const currentStep = this.getCurrentStep();
    if (step) {
      step.state = ClrTimelineStepState.PROCESSING;
      this.init(
        this.getCurrentState().map((_step) => {
          if (currentState.indexOf(_step) == currentState.indexOf(step)) {
            _step = step;
          }
          return _step;
        })
      );
      return step;
    } else {
      if (currentStep) {
        this.init(
          this.getCurrentState().map((step) => {
            if (
              currentState.indexOf(currentStep) == currentState.indexOf(step)
            ) {
              step.state = ClrTimelineStepState.PROCESSING;
            }
            return step;
          })
        );
      }

      return step ?? currentStep;
    }
  }

  stopProcess(step?: TimelineStep) {
    const currentStep = this.getCurrentStep();
    const currentState = this.getCurrentState();
    if (step) {
      step.state = ClrTimelineStepState.CURRENT;
      this.init(
        currentState?.map((_step) => {
          if (currentState.indexOf(_step) == currentState.indexOf(step)) {
            _step = step;
          }
          return _step;
        })
      );
    } else {
      if (currentStep) {
        this.init(
          this.getCurrentState()?.map((step) => {
            if (step == currentStep) {
              step.state = ClrTimelineStepState.CURRENT;
            }
            return step;
          })
        );
      }
    }
    return step ?? currentStep;
  }

  error(step?: TimelineStep) {
    const currentStep = this.getCurrentStep();
    if (step) {
      this.init(
        this.getCurrentState().map((step) => {
          if (step == currentStep) {
            step.state = ClrTimelineStepState.ERROR;
          }
          return step;
        })
      );
    } else {
      this.init(
        this.getCurrentState().map((step) => {
          if (step.state == ClrTimelineStepState.CURRENT) {
            step.state = ClrTimelineStepState.ERROR;
          }
          return step;
        })
      );
    }
  }

  finish() {
    this.getCurrentState()?.map(
      (step) => (step.state = ClrTimelineStepState.SUCCESS)
    );
  }

  reset() {
    const currentState = this.getCurrentState();
    currentState?.map((step) => {
      if (currentState.indexOf(step) == 0) {
        step.state = ClrTimelineStepState.CURRENT;
      } else {
        step.state = ClrTimelineStepState.NOT_STARTED;
      }
      return step;
    });
  }
}
