interface normalizeValueProps {
  currentValue: number;
  maxValue?: number;
}

interface INormalizeValue {
  value: number;
}

export function normalizeValue({
  currentValue,
  maxValue = 60,
}: normalizeValueProps): INormalizeValue {
  const value = (currentValue / maxValue) * 100;
  return { value };
}
