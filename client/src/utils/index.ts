enum Locale {
  DE = "de-DE",
  EN = "en-US",
  FR = "fr-FR",
}

enum Currency {
  EUR = "EUR",
  USD = "USD",
  GBP = "GBP",
}

enum Style {
  Currency = "currency",
  Decimal = "decimal",
  Percent = "percent",
}

type NumberFormatOptions = {
  locale: Locale;
  style: Style;
  currency: Currency;
}

const DEFAULT: NumberFormatOptions = {
  locale: Locale.DE,
  style: Style.Currency,
  currency: Currency.EUR,
};

export const createNumberFormatter = (options = DEFAULT) =>
  new Intl.NumberFormat(options.locale, {
    style: options.style,
    currency: options.currency,
  });
