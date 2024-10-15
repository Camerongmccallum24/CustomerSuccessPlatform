import * as tf from '@tensorflow/tfjs';

export async function createChurnModel() {
  const model = tf.sequential();
  model.add(tf.layers.dense({ units: 10, inputShape: [4], activation: 'relu' }));
  model.add(tf.layers.dense({ units: 1, activation: 'sigmoid' }));

  model.compile({ optimizer: 'adam', loss: 'binaryCrossentropy', metrics: ['accuracy'] });

  return model;
}

export async function trainChurnModel(model: tf.Sequential, data: number[][], labels: number[]) {
  const xs = tf.tensor2d(data);
  const ys = tf.tensor2d(labels, [labels.length, 1]);

  await model.fit(xs, ys, { epochs: 100 });

  xs.dispose();
  ys.dispose();
}

export function predictChurn(model: tf.Sequential, customerData: number[]) {
  const input = tf.tensor2d([customerData]);
  const prediction = model.predict(input) as tf.Tensor;
  const result = prediction.dataSync()[0];
  input.dispose();
  prediction.dispose();
  return result;
}
