import Swal, { SweetAlertOptions } from 'sweetalert2';
import 'animate.css';

export const notifySuccess = (msg?: string) => {
  const configuration: SweetAlertOptions = {
    icon: 'success',
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    // confirmButtonText: 'Go to Cart',
    timer: 2000,
    iconColor: '#ff7f00',
    showClass: {
      popup: `
        animate__animated
        animate__fadeInRight
        animate__faster
      `
    },
    hideClass: {
      popup: `
        animate__animated
        animate__fadeOutRight
        animate__faster
      `
    }
  }

  if (msg) {
    return Swal.fire({
      ...configuration,
      text: msg,
    })
  }

  return Swal.mixin({
    ...configuration,
    showConfirmButton: true,
    confirmButtonText: 'Go to Cart',
  })
}

export const notifyError = (msg?: string) => {
  return Swal.fire({
    text: msg,
    icon: 'error',
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 1500,
    iconColor: 'red',
    showClass: {
      popup: `
        animate__animated
        animate__bounceIn
        animate__faster
      `
    },
    hideClass: {
      popup: `
        animate__animated
        animate__bounceOut
        animate__faster
      `
    }
  })
}
