import {
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from '../ui/form';
import { Textarea, TextareaProps } from '../ui/textarea';

import { useFormContext } from 'react-hook-form';

// ----------------------------------------------------------------

interface ITextareaProps extends TextareaProps {
  name: string;
  label: string;
  description?: string;
}

const RHFTextarea: React.FC<ITextareaProps> = ({
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
            <Textarea {...field} {...rest} />
          </FormControl>
          {description && <FormDescription>{description}</FormDescription>}
          <FormMessage />
        </FormItem>
      )}
    />
  );
};

export default RHFTextarea;
