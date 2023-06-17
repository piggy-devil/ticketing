import { Subjects, Publisher, ExpirationCompleteEvent } from "@muham/common";

export class ExpirationCompletePublisher extends Publisher<ExpirationCompleteEvent> {
  readonly subject = Subjects.ExpirationComplete;
}
