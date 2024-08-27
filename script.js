document.addEventListener('DOMContentLoaded', function () {
    const textbooks = [
        { name: 'Electronics Textbook - All About Circuits', url: 'https://www.allaboutcircuits.com/textbook/' },
        { name: 'Engineering Circuit Analysis', url: 'https://www.pdfdrive.com/engineering-circuit-analysis-e187929798.html' },
        { name: 'Introduction to Electric Circuits', url: 'https://openstax.org/books/college-physics/pages/1-introduction' },
        { name: 'Electrical Engineering: Principles and Applications', url: 'https://www.academia.edu/43162977/Electrical_Engineering_Principles_and_Applications' },
        { name: 'Power System Analysis', url: 'https://www.bookboon.com/en/power-system-analysis-ebook' },
        { name: 'Control Systems Engineering', url: 'https://www.pdfdrive.com/control-systems-engineering-7th-edition-e187929795.html' },
        { name: 'Digital Design and Computer Architecture', url: 'https://b-ok.cc/book/3614354/75c2e7' },
        { name: 'Electric Machinery Fundamentals', url: 'https://archive.org/details/ElectricMachineryFundamentals5thEdition' },
        { name: 'Microelectronic Circuits', url: 'https://www.pdfdrive.com/microelectronic-circuits-by-sedra-smith-e187929804.html' },
        { name: 'Signal Processing and Linear Systems', url: 'https://www.academia.edu/43154016/Signal_Processing_and_Linear_Systems' },
        { name: 'Power Electronics: Circuits, Devices & Applications', url: 'https://b-ok.cc/book/3588368/9c802c' },
        { name: 'Fundamentals of Electrical Drives', url: 'https://www.bookboon.com/en/fundamentals-of-electrical-drives-ebook' },
        { name: 'Switching Power Supplies A-Z', url: 'https://b-ok.cc/book/1338728/13e8e8' },
        { name: 'Electric Power Generation, Transmission, and Distribution', url: 'https://b-ok.cc/book/815035/6f741f' },
        { name: 'Fundamentals of Electric Circuits', url: 'https://b-ok.cc/book/5017499/82b1f3' },
        { name: 'Electricity and Magnetism', url: 'https://archive.org/details/ElectricityAndMagnetism' },
        { name: 'Semiconductor Device Fundamentals', url: 'https://b-ok.cc/book/659230/5d0e78' },
        { name: 'The Art of Electronics', url: 'https://archive.org/details/TheArtOfElectronics3rdEdition' },
        { name: 'Electrical Machines', url: 'https://www.bookboon.com/en/electrical-machines-ebook' },
        { name: 'Fundamentals of Digital Logic with VHDL Design', url: 'https://b-ok.cc/book/5001440/9c6a28' },
    ];

    const journals = [
        { name: 'IEEE Xplore Digital Library', url: 'https://ieeexplore.ieee.org/Xplore/home.jsp' },
        { name: 'ScienceDirect - Electrical Engineering', url: 'https://www.sciencedirect.com/journal/electrical-engineering' },
        { name: 'Journal of Electrical and Electronics Engineering', url: 'https://www.springer.com/journal/42835' },
        { name: 'International Journal of Electrical Power & Energy Systems', url: 'https://www.journals.elsevier.com/international-journal-of-electrical-power-and-energy-systems' },
        { name: 'Electric Power Systems Research', url: 'https://www.journals.elsevier.com/electric-power-systems-research' },
        { name: 'IEEE Transactions on Power Systems', url: 'https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=59' },
        { name: 'Journal of Electrical Engineering', url: 'https://www.jee.ro/' },
        { name: 'Journal of Electrical Engineering and Technology', url: 'https://link.springer.com/journal/42835' },
        { name: 'IET Electric Power Applications', url: 'https://digital-library.theiet.org/journals/iet-epa' },
        { name: 'Electric Power Components and Systems', url: 'https://www.tandfonline.com/toc/uemp20/current' },
        { name: 'IEEE Transactions on Industrial Electronics', url: 'https://ieeexplore.ieee.org/xpl/RecentIssue.jsp?punumber=41' },
        { name: 'Energy and Power Engineering', url: 'https://www.scirp.org/journal/epe/' },
        { name: 'Journal of Electrical and Computer Engineering', url: 'https://www.hindawi.com/journals/jece/' },
        { name: 'Renewable and Sustainable Energy Reviews', url: 'https://www.journals.elsevier.com/renewable-and-sustainable-energy-reviews' },
        { name: 'Journal of Power Sources', url: 'https://www.journals.elsevier.com/journal-of-power-sources' },
        { name: 'IET Renewable Power Generation', url: 'https://digital-library.theiet.org/journals/iet-rpg' },
        { name: 'Journal of Energy Storage', url: 'https://www.journals.elsevier.com/journal-of-energy-storage' },
        { name: 'International Journal of Electrical and Computer Engineering (IJECE)', url: 'http://ijece.iaescore.com/index.php/IJECE' },
        { name: 'Journal of Energy Conversion and Management', url: 'https://www.journals.elsevier.com/energy-conversion-and-management' },
        { name: 'Electrical Engineering and Automation', url: 'https://www.springer.com/series/12806' },
    ];

    const aiTools = [
        { name: 'MATLAB', url: 'https://www.mathworks.com/products/matlab.html' },
        { name: 'Simulink', url: 'https://www.mathworks.com/products/simulink.html' },
        { name: 'Scikit-learn', url: 'https://scikit-learn.org/' },
        { name: 'TensorFlow', url: 'https://www.tensorflow.org/' },
        { name: 'Keras', url: 'https://keras.io/' },
        { name: 'PyTorch', url: 'https://pytorch.org/' },
        { name: 'Weka', url: 'https://www.cs.waikato.ac.nz/ml/weka/' },
        { name: 'Google Colab', url: 'https://colab.research.google.com/' },
        { name: 'Anaconda', url: 'https://www.anaconda.com/' },
        { name: 'Azure Machine Learning Studio', url: 'https://azure.microsoft.com/en-us/services/machine-learning/' },
        { name: 'IBM Watson', url: 'https://www.ibm.com/watson' },
        { name: 'RapidMiner', url: 'https://rapidminer.com/' },
        { name: 'Microsoft CNTK', url: 'https://docs.microsoft.com/en-us/cognitive-toolkit/' },
        { name: 'OpenAI GPT', url: 'https://openai.com/' },
        { name: 'H2O.ai', url: 'https://www.h2o.ai/' },
        { name: 'KNIME', url: 'https://www.knime.com/' },
        { name: 'Amazon SageMaker', url: 'https://aws.amazon.com/sagemaker/' },
        { name: 'Google AutoML', url: 'https://cloud.google.com/automl' },
        { name: 'DataRobot', url: 'https://www.datarobot.com/' },
        { name: 'BigML', url: 'https://www.bigml.com/' },
    ];

    const otherResources = [
        { name: 'Electrical4U', url: 'https://www.electrical4u.com/' },
        { name: 'EEVblog', url: 'https://www.eevblog.com/' },
        { name: 'MIT OpenCourseWare - Electrical Engineering', url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/' },
        { name: 'Khan Academy - Electrical Engineering', url: 'https://www.khanacademy.org/science/electrical-engineering' },
        { name: 'Coursera - Electrical Engineering', url: 'https://www.coursera.org/browse/physical-science-and-engineering/electrical-engineering' },
        { name: 'edX - Electrical Engineering Courses', url: 'https://www.edx.org/learn/electrical-engineering' },
        { name: 'Electronics Tutorials', url: 'https://www.electronics-tutorials.ws/' },
        { name: 'All About Circuits', url: 'https://www.allaboutcircuits.com/' },
        { name: 'Electrical Engineering Portal', url: 'https://electrical-engineering-portal.com/' },
        { name: 'Engineer’s Toolbox', url: 'https://www.engineeringtoolbox.com/' },
        { name: 'Electronics Hub', url: 'https://www.electronicshub.org/' },
        { name: 'National Instruments', url: 'https://www.ni.com/en-us.html' },
        { name: 'Electrical Technology', url: 'https://www.electricaltechnology.org/' },
        { name: 'Learn Engineering', url: 'https://www.learnengineering.org/' },
        { name: 'Circuit Digest', url: 'https://circuitdigest.com/' },
        { name: 'SparkFun Electronics', url: 'https://www.sparkfun.com/' },
        { name: 'Adafruit', url: 'https://www.adafruit.com/' },
        { name: 'PCBWay', url: 'https://www.pcbway.com/' },
        { name: 'Electronics Weekly', url: 'https://www.electronicsweekly.com/' },
        { name: 'Digi-Key Electronics', url: 'https://www.digikey.com/' },
        { name: 'Electronics Point', url: 'https://www.electronicspoint.com/' },
        { name: 'Mouser Electronics', url: 'https://www.mouser.com/' },
        { name: 'Allied Electronics & Automation', url: 'https://www.alliedelec.com/' },
        { name: 'Hackaday', url: 'https://hackaday.com/' },
        { name: 'Robotics Stack Exchange', url: 'https://robotics.stackexchange.com/' },
        { name: 'Analog Devices', url: 'https://www.analog.com/en/index.html' },
        { name: 'Element14', url: 'https://www.element14.com/community/welcome' },
        { name: 'Stack Overflow - Electrical Engineering', url: 'https://electronics.stackexchange.com/' },
        { name: 'Instructables - Electrical Projects', url: 'https://www.instructables.com/circuits/' },
    ];

    function createCategoryElement(categoryName, resources) {
        const categoryElement = document.createElement('div');
        categoryElement.classList.add('category');

        const header = document.createElement('h2');
        header.textContent = categoryName;
        categoryElement.appendChild(header);

        const list = document.createElement('ul');
        resources.forEach(resource => {
            const listItem = document.createElement('li');
            const link = document.createElement('a');
            link.textContent = resource.name;
            link.href = resource.url;
            link.target = '_blank';
            listItem.appendChild(link);
            list.appendChild(listItem);
        });
        categoryElement.appendChild(list);

        return categoryElement;
    }

    const container = document.getElementById('container');

    const textbooksElement = createCategoryElement('Textbooks', textbooks);
    container.appendChild(textbooksElement);

    const journalsElement = createCategoryElement('Journals', journals);
    container.appendChild(journalsElement);

    const aiToolsElement = createCategoryElement('AI Tools', aiTools);
    container.appendChild(aiToolsElement);

    const otherResourcesElement = createCategoryElement('Other Resources', otherResources);
    container.appendChild(otherResourcesElement);
});
