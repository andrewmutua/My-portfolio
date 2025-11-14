// src/utils/alert.jsx
import Swal from "sweetalert2";
import "sweetalert2/dist/sweetalert2.min.css";

/**
 * Show a styled toast alert.
 *
 * @param {'success' | 'error' | 'info' | 'warning'} status - Type of the alert.
 * @param {string} message - Message to display in the alert.
 */
export const displayToast = (status = "info", message = "Something happened!") => {
  const iconColors = {
    success: "#4caf50", // green
    error: "#f44336",   // red
    info: "#2196f3",    // blue
    warning: "#ff9800", // orange
  };

  const bgColor = iconColors[status] || "#2196f3";

  Swal.fire({
    toast: true,
    position: "top-end",
    icon: status,
    title: message,
    showConfirmButton: false,
    showCloseButton: true,   // 👈 add ❌ button
    timer: 3000,             // ⏰ 3 seconds
    timerProgressBar: true,
    background: bgColor,
    color: "#fff",
    iconColor: "#fff",
    showClass: {
      popup: "animate__animated animate__fadeInRight",
    },
    hideClass: {
      popup: "animate__animated animate__fadeOutRight",
    },
    customClass: {
      popup: "border-0 shadow-lg rounded-lg p-3",
      closeButton: "text-white text-lg font-bold ml-2 hover:text-gray-300",
    },
    didOpen: (toast) => {
      const closeBtn = toast.querySelector(".swal2-close");
      if (closeBtn) {
        closeBtn.addEventListener("click", () => {
          toast.classList.add("animate__animated", "animate__fadeOutRight");
          setTimeout(() => Swal.close(), 500); // smooth fade-out
        });
      }
    },
  });
};
