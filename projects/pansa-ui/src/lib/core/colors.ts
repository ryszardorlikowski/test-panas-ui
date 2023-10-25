export const enum PansaColors {
  ACTION = 'action',
  PRIMARY = 'primary',
  PRIMARY_REVERSED = 'primary-reversed',
  SECONDARY = 'secondary',
  TERTIARY = 'tertiary',
  INFORMATIVE = 'informative',
  NEGATIVE = 'negative',
  POSITIVE = 'positive',
  WARNING = 'warning'
}

export function pansaColorToHex(pansaColor: PansaColors): string {
  switch (pansaColor) {
    case PansaColors.ACTION:
      return '#097D6C' //test;
    case PansaColors.PRIMARY:
      return '#000000';
    case PansaColors.PRIMARY_REVERSED:
      return '#FFFFFF';
    case PansaColors.SECONDARY:
      return '#637381';
    case PansaColors.TERTIARY:
      return '#ADB5BD';
    case PansaColors.INFORMATIVE:
      return '#0079C4';
    case PansaColors.NEGATIVE:
      return '#D3310A';
    case PansaColors.POSITIVE:
      return '#0DA566';
    case PansaColors.WARNING:
      return '#FFB833';
    default:
      return '#097D6C';
  }
}
