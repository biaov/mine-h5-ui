import { Point, Rect, Option } from './interfaces';
import { CalcSizeName } from './types';
export declare const getSymmPoint: <T extends Point>(curPoint: T, center: T) => Point;
export declare const getCenterPoint: <T extends Point>(curPoint: T, symmPoint: T) => Point;
export declare const angleMutualRadian: (value: number, type?: string) => number;
export declare const getRotatePoint: (point: Point, center: Point, angle: number) => Point;
declare const calcSize: (name: CalcSizeName, option: Option) => Rect;
export default calcSize;
