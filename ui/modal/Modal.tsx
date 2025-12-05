import { motion, AnimatePresence } from "motion/react";

const backdropVariants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

const dialogVariants = {
  hidden: { opacity: 0, scale: 0.9, y: 20 },
  visible: {
    opacity: 1,
    scale: 1,
    y: 0,
  },
};

type ModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

export function Modal({ isOpen, onClose }: ModalProps) {
  return (
    <AnimatePresence mode="wait">
      {isOpen && (
        <motion.div
          key="backdrop"
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/40"
          variants={backdropVariants}
          initial="hidden"
          animate="visible"
          exit="hidden"
          onClick={onClose}
        >
          <motion.div
            key="dialog"
            variants={dialogVariants}
            initial="hidden"
            animate="visible"
            exit="hidden"
            onClick={(e) => e.stopPropagation()}
            className="rounded-xl bg-slate-900 p-6 shadow-xl"
          >
            <span>Hello Swiecie</span>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
