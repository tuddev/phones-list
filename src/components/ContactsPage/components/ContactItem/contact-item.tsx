import { observer } from "mobx-react-lite";
import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ContentPlaceholder } from "./ContentPlaceholder/content-placeholder";

type IContactItemProps = {
  i: number;
  expanded: boolean | number;
  setExpanded: React.Dispatch<React.SetStateAction<number | false>>;
}

export const ContactItem: React.FC<IContactItemProps> = ({ i, expanded, setExpanded }) => {
  const isOpen = i === expanded;
  return (
    <>
      <motion.header
        initial={false}
        animate={{ backgroundColor: isOpen ? "#FF0088" : "#0055FF" }}
        onClick={() => setExpanded(isOpen ? false : i)}
      />
      <AnimatePresence initial={false}>
        {isOpen && (
          <motion.section
            key="content"
            initial="collapsed"
            animate="open"
            exit="collapsed"
            variants={{
              open: { opacity: 1, height: "auto" },
              collapsed: { opacity: 0, height: 0 },
            }}
            transition={{ duration: 0.8, ease: [0.04, 0.62, 0.23, 0.98] }}
          >
            <ContentPlaceholder />
          </motion.section>
        )}
      </AnimatePresence>
    </>
  );
};

observer(ContactItem);

// export const Example = () => {
//   // This approach is if you only want max one section open at a time. If you want multiple
//   // sections to potentially be open simultaneously, they can all be given their own `useState`.
//   const [expanded, setExpanded] = useState<false | number>(0);

//   return accordionIds.map((i) => (
//     <Accordion i={i} expanded={expanded} setExpanded={setExpanded} />
//   ));
// };

// const accordionIds = [0, 1, 2, 3];
