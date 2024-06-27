// composables/useFlowbite.js

export function useFlowbite(callback) {
  if (process.client) {
    import('flowbite').then((flowbite) => {
      callback(flowbite);
    });
  }
}
