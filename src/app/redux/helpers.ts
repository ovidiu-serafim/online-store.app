import {RequestStatusValue} from '../shared/models/request-status-value';
import {RequestStatus} from '../shared/models/request-status';
import {RequestStatusType} from '../shared/enums/request-status-type';

export function setStatus(state: any, key: string, value: RequestStatusValue): RequestStatus {
  return {
    ...state.status,
    [key]: value
  };
}

export const statusProjector = (state: any, props: { key: string, type?: RequestStatusType }) => {
  const status = state.status[props.key];
  if (!status) {
    return;
  }

  if (!props.type || status.type === props.type) {
    return status;
  }

  return;
};
