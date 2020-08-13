export function ReactBundle(personalConfiguration) {
  const craftpackConfiguration = {};
  const mergedConfiguration = merge(
    craftpackConfiguration,
    personalConfiguration
  );
  return mergedConfiguration;
}
