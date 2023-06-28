import { Location } from '../models/location';
import { Status } from '../models/status';

export class Details {
  device: string | undefined;
  name: string | undefined;
  model: string | undefined;
  location: Location[] | undefined;
  address: string | undefined;
  company: string | undefined;
  lastReport: string | undefined;
  nextUpdate: string | undefined;
  status: Status[] | undefined;
}
