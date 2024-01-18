import { Link } from "react-router-dom";


export const Footer = () => {
    

  return (
    <footer className="bg-white rounded-lg shadow mx-4 dark:bg-gray-800 p-4 ">
    <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-center md:justify-between">
      <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <Link to="/" className="hover:underline">Cinemate™</Link>. All Rights Reserved.
    </span>
    <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        <li>
            <i className="bi bi-instagram mr-1"></i>
            <a href="https://www.instagram.com/harshithjk_06?igsh=MWl5cXF0enF3eGplNA%3D%3D&utm_source=qr" className="hover:underline me-4 md:me-6" target="_blank" rel='noreferrer'>Instagram</a>
        </li>
        <li>
            <i className="bi bi-linkedin mr-1"></i>
            <a href="https://www.linkedin.com/in/harshith-j-k-954760191?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=ios_app" className="hover:underline me-4 md:me-6" target="_blank" rel='noreferrer'>LinkedIn</a>
        </li>
        <li>
            <i className="bi bi-whatsapp mr-1"></i>
            <a href="https://wa.link/4b0s19" className="hover:underline" target="_blank" rel='noreferrer'>Whatsapp</a>
        </li>
    </ul>
    </div>
    </footer>
  )
}
