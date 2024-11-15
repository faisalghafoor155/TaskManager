/** @format */

// /** @format */

// import React from "react";
// import ModalWrapper from "./ModelWrapper";
// import { Dialog } from "@headlessui/react";
// import Button from "./Button";

// const ViewNotification = ({ open, setOpen, el }) => {
//   const handleClose = () => setOpen(false);

//   return (
//     <ModalWrapper open={open} setOpen={setOpen}>
//       <div className="py-6 w-full max-w-md flex flex-col gap-4 items-center justify-center">
//         <Dialog.Title as="h3" className="font-semibold text-xl text-gray-800">
//           {el?.task?.title || "Notification"}
//         </Dialog.Title>

//         <Dialog.Description className="text-gray-600 text-center">
//           {el?.text || "No additional information available."}
//         </Dialog.Description>

//         <Button
//           type="button"
//           className="bg-blue-500 text-white px-4 py-2 mt-4 rounded-lg hover:bg-blue-600 focus:outline-none focus:ring focus:ring-blue-300"
//           onClick={handleClose}
//           label="Close"
//         />
//       </div>
//     </ModalWrapper>
//   );
// };

// export default ViewNotification;

import React from "react";
import ModalWrapper from "./ModelWrapper";
import { Dialog } from "@headlessui/react";
import Button from "./Button";

const ViewNotification = ({ open, setOpen, el }) => {
  return (
    <>
      <ModalWrapper open={open} setOpen={setOpen}>
        <div className="py-4 w-full flex flex-col gap-4 items-center justify-center">
          <Dialog.Title as="h3" className="font-semibold text-lg">
            {el?.task?.title}
          </Dialog.Title>

          <p className="text-start text-gray-500">{el?.text}</p>

          <Button
            type="button"
            className="bg-white px-8 mt-3 text-sm font-semibold text-gray-900 sm:w-auto border border-gray-300"
            onClick={() => setOpen(false)}
            label="Ok"
          />
        </div>
      </ModalWrapper>
    </>
  );
};

export default ViewNotification;
