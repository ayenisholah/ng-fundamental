import { Injectable } from '@angular/core';
declare let toastr;

@Injectable()
export class ToastrService {
  success(message: string, title: string, ToastConfig: object) {
    toastr.success(message, title, ToastConfig);
  }
  info(message: string, title: string, ToastConfig: object) {
    toastr.info(message, title, ToastConfig);
  }
  warning(message: string, title?: string) {
    toastr.warning(message, title);
  }
  error(message: string, title?: string) {
    toastr.error(message, title);
  }
}
