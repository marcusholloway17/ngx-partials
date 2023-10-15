import {
  Component,
  EventEmitter,
  Input,
  OnDestroy,
  Output,
} from "@angular/core";
import { Subject, takeUntil } from "rxjs";
import { TimelineStep } from "./type";
import { TimelineService } from "./timeline.service";
import { ClrTimelineLayout } from "@clr/angular";

@Component({
  selector: "app-timeline",
  templateUrl: "./timeline.component.html",
  styleUrls: ["./timeline.component.css"],
  providers: [TimelineService],
})
export class TimelineComponent implements OnDestroy {
  private destroy$ = new Subject<void>();
  public timelines$ = this.timelineService.timeline$.pipe(
    takeUntil(this.destroy$)
  );
  @Input() set timelines(value: TimelineStep[]) {
    this.timelineService.init(value);
  }
  @Input() layout: ClrTimelineLayout = ClrTimelineLayout.HORIZONTAL;
  @Output() indexChanged = new EventEmitter<number>();

  constructor(private timelineService: TimelineService) {
    console.log(this.timelines?.length );
  }

  ngOnInit(): void {
    this.emit(this.indexChanged, 0);
  }

  emit(emitter: EventEmitter<any>, value: any) {
    emitter.emit(value);
  }

  next() {
    const nexted = this.timelineService.next();
    if (nexted) {
      this.emit(
        this.indexChanged,
        this.timelineService.getCurrentState().indexOf(nexted)
      );
    }
  }

  previous() {
    const previously = this.timelineService.previous();
    if (previously) {
      this.emit(
        this.indexChanged,
        this.timelineService.getCurrentState().indexOf(previously)
      );
    }
  }

  processing(step?: TimelineStep) {
    this.timelineService.processing(step);
  }

  stopProcess(step?: TimelineStep) {
    this.timelineService.stopProcess(step);
  }

  error(step?: TimelineStep) {
    this.timelineService.error(step);
  }

  finish() {
    this.timelineService.finish();
    this.emit(this.indexChanged, this.timelines?.length - 1);
  }

  reset() {
    this.timelineService.reset();
    this.emit(this.indexChanged, 0);
  }

  ngOnDestroy(): void {
    this.reset();
    this.destroy$.next();
  }
}
