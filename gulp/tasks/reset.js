import { deleteAsync } from 'del';

const reset = () => deleteAsync(global.app.path.clean);

export default reset;
