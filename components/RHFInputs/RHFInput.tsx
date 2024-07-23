import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Input, InputProps } from '../ui/input';

import { useFormContext } from 'react-hook-form';

// ----------------------------------------------------------------

interface IRHFInputProps extends InputProps {
  name: string;
  label: string;
  description?: string;
}

const RHFInput: React.FC<IRHFInputProps> = ({
  name,
  label,
  description,
  ...rest
}) => {
  const { control } = useFormContext();

  return (
    <FormField
      control={control}
      name={name}
      render={({ field }) => (
        <FormItem>
          <FormLabel>{label}</FormLabel>
          <FormControl>
            <Input {...field} {...rest} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RHFInput;
