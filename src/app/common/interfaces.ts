

export interface IErrorInfo {
  title: string;
  description: string;
}


export interface IGumQueueInfo {
  externalClearanceProfileIntegrationQueueId: number;
  externalClearanceProfileId: number;
  externalClearanceIntegrationId: number;
  externalClearanceIntegrationStatusId: number;
  messageJson: string;
  statusJson: string;
  createdBy: string;
  createdDate: Date;
  updatedBy: string;
  lastUpdated: Date;
  processAfterDate: Date;
  attemptsCount: number;
  errorInfo: string;
}

export interface IGumError {
  ok: boolean;
  correlationId: string;
  errors: string;
}
