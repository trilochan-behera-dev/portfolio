export default function CVButton({ children, addClass }) {

    return (
        <a href="https://drive.google.com/file/d/1eYA3WQ7jIVS3vKuziTfrBJLCRYon6ML_/view" target="_blank">
            <button
                className={
                    "py-2 px-5 sm:px-8 text-white-500 font-semibold bg-primary hover:shadow-primary transition-all outline-none rounded-br-3xl rounded-md " +
                    addClass
                }
                >
                {children}
            </button>
        </a>
    )
}
