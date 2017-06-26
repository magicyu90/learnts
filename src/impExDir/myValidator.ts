// import { ZipCodeValidator } from "./ZipCodeValidator";

// 可以对倒入内容进行重命名
// import { ZipCodeValidator as ZCV } from './ZipCodeValidator';

// 将整个模块导入到一个变量
import * as validator from "./ZipCodeValidator";

// let myValidator = new ZipCodeValidator();

let myValidator = new validator.ZipCodeValidator();