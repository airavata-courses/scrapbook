from imageai.Classification import ImageClassification
import os

def get_predictions(image):
    try:
        execution_path = os.getcwd()
        prediction = ImageClassification()
        prediction.setModelTypeAsResNet50()
        prediction.setModelPath(os.path.join(execution_path, "resnet50_imagenet_tf.2.0.h5"))
        prediction.loadModel()
        predictions, probabilities = prediction.classifyImage(image, result_count=3, input_type="array" )
        
        return predictions
    except Exception as e:
        print(e)
    return {}