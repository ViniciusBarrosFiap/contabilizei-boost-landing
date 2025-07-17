export {};

declare global {
  interface Window {
    hbspt: {
      forms: {
        create: (args: {
          portalId: string;
          formId: string;
          region?: string;
          target: string;
          onFormSubmitted?: () => void;
          onFormReady?: () => void
        }) => void;
      };
    };
  }
}
