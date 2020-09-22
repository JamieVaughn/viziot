const streamURL = (uuid) => (
    `http://127.0.0.1:8081/v1.0/streams/${uuid}`
)

const mockListStreams = () => new Promise((resolve, reject) => setTimeout(() => resolve({
  "streams": [
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM4", 
      "unit": "IPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/16232eab-6a3e-4131-8c64-12b4aadaca0d/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM35", 
      "unit": "IPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/a85263f6-6227-4051-88e9-2b4a9a43051c/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-DV2", 
      "unit": "DIGI", 
      "url": "http://54.197.6.143:8081/v1.0/streams/8ce5d85f-309d-47df-a0c0-622eb1ce02f7/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA22", 
      "unit": "VPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/c5067e7a-6aa1-42df-b877-a81f30449a34/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM31", 
      "unit": "VPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/d5a3c4ee-e369-49d2-abab-5b36ec31beca/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA13", 
      "unit": "VPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/f7dff115-7a9c-4cf2-9616-916195750fbf/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA36", 
      "unit": "IPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/3c3fd91e-efbb-427d-8d6f-564ed56901c3/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA29", 
      "unit": "VPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/365b2407-5c5a-45a9-8908-d8388cc56fbe/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA10", 
      "unit": "IPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/1bfdbd22-df9e-4d90-b393-c0ea23724844/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM22", 
      "unit": "VPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/6c0e066d-2aee-4d70-80cf-1057505fc631/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-DF", 
      "unit": "DFDT", 
      "url": "http://54.197.6.143:8081/v1.0/streams/f62259bc-4ae6-4216-9cbb-f88dd757b86d/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA21", 
      "unit": "VPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/bc7ff7b8-57c9-4ca3-b29f-aafd65822a36/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-DV4", 
      "unit": "DIGI", 
      "url": "http://54.197.6.143:8081/v1.0/streams/d0d7a785-8d67-452c-aa2e-606e6eec7891/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM29", 
      "unit": "VPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/e85123c6-4d94-45d4-9a93-8257fc249227/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA9", 
      "unit": "IPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/2b2abc8b-be96-4bcb-be80-92106b03f4a2/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA16", 
      "unit": "VPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/86ff438a-f17c-465c-81a8-ee2f22d90195/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM7", 
      "unit": "VPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/0661731a-23b9-47fd-9d1a-a585615344ae/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM12", 
      "unit": "IPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/bf683717-35f7-4a97-9667-384cbbef9075/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-DV1", 
      "unit": "DIGI", 
      "url": "http://54.197.6.143:8081/v1.0/streams/5407b934-45e3-4dd6-8071-a1671c182d9e/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA23", 
      "unit": "VPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/fd18bad6-47d9-4f88-b246-c2dfd41cb8b5/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM20", 
      "unit": "IPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/4d065651-ca90-48f5-b7f9-964011eb3367/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA33", 
      "unit": "IPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/9eb3e7b8-de3d-4d26-94a5-42eb99402d86/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA31", 
      "unit": "VPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/54513b40-24ff-4322-abb2-9759a8460044/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM15", 
      "unit": "VPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/1ce63620-9dcd-469a-844c-c7b61e4e1035/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA35", 
      "unit": "IPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/553740e7-bb88-4dc7-bf9e-f5a515a3cfb8/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA32", 
      "unit": "VPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/aa399110-0af0-4709-b769-1a82f094d192/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM11", 
      "unit": "IPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/592ed236-27b7-41e7-b874-5eb10abad9ec/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA30", 
      "unit": "VPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/4a7ecacc-c9fc-496f-92a2-773ac82cb7fe/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA12", 
      "unit": "IPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/4ef85fb8-75ad-4367-ad8d-58de4c5b8ee6/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-FQ", 
      "unit": "FREQ", 
      "url": "http://54.197.6.143:8081/v1.0/streams/b18f44f9-1266-49f8-8169-b18275284561/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA34", 
      "unit": "IPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/b8acadbd-c708-41cb-9070-a8f6910add28/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM24", 
      "unit": "VPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/16e6b11e-09e2-44b4-b263-aadd6bc00952/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA25", 
      "unit": "IPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/afdfab3e-f407-4d51-a0b8-80361b5e831e/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM19", 
      "unit": "IPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/9f2d5589-1df7-4aaf-973d-6be9dbce4db8/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM16", 
      "unit": "VPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/7585606a-da98-425b-871c-095150ddfc6f/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM14", 
      "unit": "VPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/ee601821-5fd4-4bd0-991e-6b8215da44f4/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM10", 
      "unit": "IPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/60daaa2c-b756-4b65-bb01-38681acf6d01/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM3", 
      "unit": "IPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/5bfcf55e-2ec6-4b5d-8e4e-5c6b62c0aeb9/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM18", 
      "unit": "IPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/00775e96-514b-41f6-938c-bf1569fac076/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA18", 
      "unit": "IPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/9aff295a-9963-4c2c-89cb-1e390a6b1cab/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA7", 
      "unit": "VPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/f6c457d0-5652-491c-8d59-79287186cc1c/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM21", 
      "unit": "VPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/2cab7482-abb2-4fe4-867e-f8503a573c07/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM9", 
      "unit": "IPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/392a41d6-14ca-414b-b164-928cee0adfd8/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA15", 
      "unit": "VPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/0e309787-5273-49a4-9b5b-9f3a90da783f/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM2", 
      "unit": "IPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/108f287f-6aa4-4d2d-b529-15293e0cf512/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM27", 
      "unit": "IPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/250bab7e-e828-4efe-b7a0-20844d62e8c2/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA11", 
      "unit": "IPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/80433904-6951-4c6a-814b-34703efbbf19/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA27", 
      "unit": "IPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/7837f385-bbd6-4e0a-97bb-25e32ae71a33/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA20", 
      "unit": "IPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/6165e98e-b2f3-470a-9ed5-098ca757bc92/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA6", 
      "unit": "VPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/f2991469-a004-4f76-b7a8-4f304f8e1cd8/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-SF", 
      "unit": "FLAG", 
      "url": "http://54.197.6.143:8081/v1.0/streams/b6b0e091-d9ed-43ae-b4f5-54377ff85d54/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM25", 
      "unit": "IPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/37d15047-201a-4cf9-a640-ef55ec8f5852/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA14", 
      "unit": "VPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/bc5cb50c-2a0d-4284-b16a-4117fd964ee2/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM30", 
      "unit": "VPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/99f0bbc3-6edb-4c1f-a7ed-9970e523b270/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA26", 
      "unit": "IPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/69806563-3caf-4c1b-9ba4-a6cb4a12b7af/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM33", 
      "unit": "IPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/a2460ba3-223c-407d-948b-bc9cc85fec35/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA3", 
      "unit": "IPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/f283ab60-5dd3-4bbf-ab73-f4085772654b/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM5", 
      "unit": "VPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/61e2d091-274e-487c-8032-939921b9a5f6/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA4", 
      "unit": "IPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/176649c1-8edb-442f-ae1c-6cac24a5e17b/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM28", 
      "unit": "IPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/554e1901-49bd-40dc-adda-3391b137fc12/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA5", 
      "unit": "VPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/4d436195-c4e4-42b3-9e57-93f3cc390e36/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM26", 
      "unit": "IPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/49b5970e-6a11-4851-abd3-dd21b8d3149c/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM23", 
      "unit": "VPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/d749ddb6-fe69-48ab-96d3-4e6adac81fd5/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM17", 
      "unit": "IPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/c47c457b-8a5c-4658-b75c-215b83b742ba/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA28", 
      "unit": "IPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/7876a58f-a571-415f-92ff-c9fb7a4f6bda/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM13", 
      "unit": "VPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/1694597c-db83-4119-97e0-3c008a53164e/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA1", 
      "unit": "IPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/8a5bd5d2-5dd0-4c35-bac8-1d91435a22a5/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA24", 
      "unit": "VPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/8739b103-2a96-4bd4-9134-0b7b1597b080/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA8", 
      "unit": "VPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/c40aca90-9bfa-4e4a-9d9e-acd6e847042a/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA19", 
      "unit": "IPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/94083c1b-ca52-4fcb-88d9-78ce41cefb63/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM36", 
      "unit": "IPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/1b5bf0c3-d47a-46f6-b101-9a4642b63e69/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA2", 
      "unit": "IPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/2a80a612-144a-4594-a642-71c1ffaf2d81/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM8", 
      "unit": "VPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/66c4f497-1842-4260-9632-188fa603f77d/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PA17", 
      "unit": "IPHA", 
      "url": "http://54.197.6.143:8081/v1.0/streams/fe6f6b36-39c4-4ecc-8090-ca3791493733/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM6", 
      "unit": "VPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/618eacda-a76e-4b93-bd2f-c6cfd228dc00/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM1", 
      "unit": "IPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/703dde28-2fc2-43a9-846c-590328342969/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM34", 
      "unit": "IPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/c78a96b0-561a-4e69-821d-4e38791466a6/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-DV3", 
      "unit": "DIGI", 
      "url": "http://54.197.6.143:8081/v1.0/streams/a717a6c0-50f7-41d2-8262-fa64ceb6c33b/"
    }, 
    {
      "collection": "pmu/ElSegundo14", 
      "ingress": "", 
      "name": "PMU-ElSegundo14-PM32", 
      "unit": "VPHM", 
      "url": "http://54.197.6.143:8081/v1.0/streams/c6d684d1-8b41-4793-9918-3664cb5da1a1/"
    }
  ]
}), 2000))

export {
    mockListStreams,
    streamURL
}