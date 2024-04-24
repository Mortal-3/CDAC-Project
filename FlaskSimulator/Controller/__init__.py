# __all__=["about_controller","contact_controller","simulator_controller"]
import os
import glob
__all__ = [os.path.basename(f)[:-3] for f in glob.glob(os.path.dirname(__file__)+"/*.py")
           if not os.path.basename(f).startswith('_')]

# from .about_controller import AboutController
# from .contact_controller import ContactController
# from .simulator_controller import SimulatorController
# The above code will iterate through all the files(.py) in the current directory and import them.
# The basename of the file is used to get the name of the class and the class is imported. 