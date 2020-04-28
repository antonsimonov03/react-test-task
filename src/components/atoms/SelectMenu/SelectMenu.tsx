import React, { useState } from 'react'
import {
  FormControl,
  InputLabel,
  Select,
  createStyles,
  makeStyles,
  Theme,
  MenuItem,
} from '@material-ui/core'
import { Props } from './types'

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    formControl: {
      margin: theme.spacing(1),
      minWidth: 120,
      maxWidth: 300,
    },
  })
)

export const SelectMenu: React.FC<Props> = ({
  classList,
  id,
  label,
  defaultValue,
  items,
}: Props) => {
  const classes = useStyles()
  const [value, setValue] = useState(defaultValue)

  const handleChange = (event: React.ChangeEvent<{ value: unknown }>) => {
    setValue(event.target.value as string)
  }

  return (
    <FormControl
      className={`${classList} ${classes.formControl}`}
      variant="outlined">
      <InputLabel id={id}>{label}</InputLabel>
      <Select labelId={id} value={value} onChange={handleChange} label={label}>
        {items.map((item) => (
          <MenuItem key={item.value} value={item.value}>
            {item.title}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}
