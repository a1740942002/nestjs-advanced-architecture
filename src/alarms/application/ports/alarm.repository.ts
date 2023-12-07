import { Alarm } from '../../domain/alarm';

// 等同於 TypeScript 的 interface
// 但因為 runtime 時，JavaScript 沒有 interface 的概念，所以用 abstract class 來實現
export abstract class AlarmRepository {
  abstract findAll(): Promise<Alarm[]>;
  abstract save(alarm: Alarm): Promise<Alarm>;
}
