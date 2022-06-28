import React, { useCallback, forwardRef } from 'react';
import { Icon } from '@iconify/react';
import { useSnackbar, SnackbarContent } from 'notistack';

const CustomComponent = forwardRef((props, ref) => {
  const { variant, message, title, id } = props;
  const { closeSnackbar } = useSnackbar();
  const handleDismiss = useCallback(() => {
    closeSnackbar(id);
  }, [id, closeSnackbar]);

  return (
    <SnackbarContent ref={ref}>
      <div
        className={`${
          variant === 'error' ? 'bg-[#FDEFEE]' : 'bg-[#E5F5EC]'
        } relative flex w-[300px] items-start gap-2 rounded-lg  p-3`}
      >
        <Icon
          onClick={handleDismiss}
          icon="carbon:close"
          className="absolute right-2 top-2 cursor-pointer text-[#A0ACB7]"
        />
        {variant === 'error' ? (
          <Icon icon="carbon:close-filled" className="mt-1 text-[#CB3A31]" />
        ) : (
          <Icon
            icon="akar-icons:circle-check-fill"
            className="mt-1 text-[#27AE60]"
          />
        )}
        <div>
          <div className="text-xs font-medium">{title}</div>
          <div className="text-xs text-[#757575]">{message}</div>
        </div>
      </div>
    </SnackbarContent>
  );
});

export default CustomComponent;
