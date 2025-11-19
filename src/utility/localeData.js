import Swal from "sweetalert2";

const getStoredApp = () => {

    const storedBookSTR = localStorage.getItem("app")

    if (storedBookSTR) {
        const storedBookData = JSON.parse(storedBookSTR);
        return storedBookData;
    } else {
        return [];
    }

}

const addToStoredDB = (id) => {

    const storedBookData = getStoredApp();

    if (storedBookData.includes(id)) {
        Swal.fire({
            icon: "error",
            title: "Oops...",
             text: "This App Alredy Installed!",
        });
    } else {
        let timerInterval;
        Swal.fire({
            color: 'blue',
            title: "Installing......",
            html: "Installing <b></b> ......",
            timer: 2000,
            timerProgressBar: true,
            didOpen: () => {
                Swal.showLoading();
                const timer = Swal.getPopup().querySelector("b");
                timerInterval = setInterval(() => {
                    timer.textContent = `${Swal.getTimerLeft()}`;
                }, 100);
            },
            willClose: () => {
                clearInterval(timerInterval);
            }
        }).then((result) => {
            /* Read more about handling dismissals below */
            if (result.dismiss === Swal.DismissReason.timer) {
                // console.log("I was closed by the timer");
            }
        });
        storedBookData.push(id)
        const data = JSON.stringify(storedBookData);
        localStorage.setItem("app", data)
    }

}

export { addToStoredDB, getStoredApp }