import { IonButton, IonPopover, IonList, IonItem } from '@ionic/react';
import React, { useState } from 'react';

type DropdownOption = { label: string; href?: string; onClick?: () => void };

interface DropdownButtonProps {
  label: string;
  options: DropdownOption[];
}

const DropdownButton: React.FC<DropdownButtonProps> = ({ label, options }) => {
  const buttonId = `dropdown-btn-${label.replace(/\s+/g, '-').toLowerCase()}`;
  const [open, setOpen] = useState(false);

  const handleClick = (opt: typeof options[0]) => {
    setOpen(false);
    if (opt.onClick) opt.onClick();
  };

  return (
    <>
      <IonButton id={buttonId} onClick={() => setOpen(true)}>
        {label}
      </IonButton>
      <IonPopover
        isOpen={open}
        onDidDismiss={() => setOpen(false)}
        trigger={buttonId}
        triggerAction="click"
      >
        <IonList>
          {options.map((opt, idx) => (
            <IonItem
              key={idx}
              button
              href={opt.href}
              onClick={() => handleClick(opt)}
            >
              {opt.label}
            </IonItem>
          ))}
        </IonList>
      </IonPopover>
    </>
  );
};

export default DropdownButton;