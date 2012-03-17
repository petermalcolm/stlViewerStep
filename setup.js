/*
 * the scripts that are always necessary regardless of whether the
 * user is using the vle, authoring tool, or grading tool
 */
var coreScripts = [
	'vle/node/stlViewer/StlViewerNode.js',
	'vle/node/stlViewer/stlViewerEvents.js'
];

//the scripts used in the vle
var studentVLEScripts = [
	'vle/node/stlViewer/stlViewer.js',
	'vle/node/stlViewer/stlViewerState.js',
	'vle/jquery/js/jquery-1.6.1.min.js',
	'vle/jquery/js/jquery-ui-1.8.7.custom.min.js',
        
        'vle/node/stlViewer/stlScripts/plane.js',        // render planes for STLs
        'vle/node/stlViewer/stlScripts/Three.js',        // render 3-D objects
        'vle/node/stlViewer/stlScripts/thingiview.js'   // render STLs
    //     'vle/node/stlViewer/stlScripts/thingiloader.js'  // load STLs - this file gets loaded dynamically (?)
];

//the scripts used in the authoring tool
var authorScripts = [
	'vle/node/stlViewer/authorview_stlViewer.js',
        
        'vle/node/stlViewer/stlScripts/plane.js',      // render planes for STLs
        'vle/node/stlViewer/stlScripts/Three.js',      // render 3-D objects
        'vle/node/stlViewer/stlScripts/thingiview.js'  // render STLs
];

//the scripts used in the grading tool
var gradingScripts = [
	'vle/node/stlViewer/stlViewerState.js'
];

//dependencies when a file requires another file to be loaded before it
var dependencies = [
	{child:"vle/node/stlViewer/StlViewerNode.js", parent:["vle/node/Node.js"]},
        
        {child:"vle/node/stlViewer/stlScripts/plane.js", parent:["vle/node/stlViewer/stlScripts/Three.js"]},
        {child:"vle/node/stlViewer/stlScripts/thingiview.js", parent:["vle/node/stlViewer/stlScripts/Three.js"]},
        {child:"vle/node/stlViewer/stlScripts/thingiloader.js", parent:["vle/node/stlViewer/stlScripts/thingiview.js"]}
];

var nodeClasses = [
	{nodeClass:'display', nodeClassText:'StlViewer'}
];

scriptloader.addScriptToComponent('core', coreScripts);
scriptloader.addScriptToComponent('core_min', coreScripts);
scriptloader.addScriptToComponent('stlViewer', studentVLEScripts);
scriptloader.addScriptToComponent('author', authorScripts);
scriptloader.addScriptToComponent('studentwork', gradingScripts);
scriptloader.addScriptToComponent('studentwork_min', gradingScripts);
scriptloader.addDependencies(dependencies);

componentloader.addNodeClasses('StlViewerNode', nodeClasses);

var css = [
       	"vle/node/stlViewer/stlViewer.css"
];

scriptloader.addCssToComponent('stlViewer', css);

var nodeTemplateParams = [
	{
		nodeTemplateFilePath:'node/stlViewer/stlViewerTemplate.st',
		nodeExtension:'st'
	}
];

componentloader.addNodeTemplateParams('StlViewerNode', nodeTemplateParams);

//used to notify scriptloader that this script has finished loading
if(typeof eventManager != 'undefined'){
	eventManager.fire('scriptLoaded', 'vle/node/stlViewer/setup.js');
};